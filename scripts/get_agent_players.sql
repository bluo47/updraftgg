CREATE OR REPLACE FUNCTION get_agent_players(agent_name TEXT)
RETURNS TABLE(player TEXT)
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
    -- Build a UNION ALL query for each agent column
    FOR i IN 1..array_length(agent_cols,1) LOOP
        sql := sql || format(
            'SELECT %I AS player FROM matches WHERE %I ILIKE %L UNION ALL ',
            player_cols[i], agent_cols[i], agent_name
        );
    END LOOP;
    -- Remove trailing UNION ALL
    sql := left(sql, length(sql) - 11);
    -- Wrap with DISTINCT to avoid duplicates
    sql := 'SELECT DISTINCT player FROM (' || sql || ') sub WHERE player IS NOT NULL AND player <> ''''';
    RETURN QUERY EXECUTE sql;
END;
$$;
