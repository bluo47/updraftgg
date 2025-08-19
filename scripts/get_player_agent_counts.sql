CREATE OR REPLACE FUNCTION get_player_agent_counts(player_name TEXT)
RETURNS TABLE(agent TEXT, count INT)
LANGUAGE plpgsql
AS $$
DECLARE
    player_cols TEXT[] := ARRAY[
        'T1_P1','T1_P2','T1_P3','T1_P4','T1_P5',
        'T2_P1','T2_P2','T2_P3','T2_P4','T2_P5'
    ];
    agent_cols TEXT[] := ARRAY[
        'T1_A1','T1_A2','T1_A3','T1_A4','T1_A5',
        'T2_A1','T2_A2','T2_A3','T2_A4','T2_A5'
    ];
    sql TEXT := '';
BEGIN
    -- Build a UNION ALL query for each player column
    FOR i IN 1..array_length(player_cols,1) LOOP
        sql := sql || format(
            'SELECT %I AS agent FROM matches WHERE %I ILIKE %L UNION ALL ',
            agent_cols[i], player_cols[i], player_name
        );
    END LOOP;
    -- Remove trailing UNION ALL
    sql := left(sql, length(sql) - 11);
    -- Wrap with aggregation
    sql := 'SELECT agent, COUNT(*)::INT FROM (' || sql || ') sub WHERE agent IS NOT NULL GROUP BY agent';
    RETURN QUERY EXECUTE sql;
END;
$$;
