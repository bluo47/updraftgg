CREATE OR REPLACE FUNCTION get_unique_teams()
RETURNS TABLE(team TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT DISTINCT team FROM (
        SELECT "TEAM1" AS team FROM matches
        UNION
        SELECT "TEAM2" AS team FROM matches
    ) t
    WHERE team IS NOT NULL AND team <> '';
END;
$$;
