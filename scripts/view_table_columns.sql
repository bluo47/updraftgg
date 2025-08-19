-- List columns for a table (example: vct2025)
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'matches';
