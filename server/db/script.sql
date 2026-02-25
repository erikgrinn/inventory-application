-- Insert into media_types
INSERT INTO media_types (name, description) VALUES
  ('YouTube', 'Video sharing platform'),
  ('Podcast', 'Audio show'),
  ('Newspaper', 'Print or online news');

-- Insert into sources
INSERT INTO sources (media_type_id, name, url, description) VALUES
  (1, 'UFO Sightings Daily', 'https://youtube.com/ufosightingsdaily', 'Popular UFO YouTube channel'),
  (2, 'The UFO Podcast', 'https://ufopodcast.com', 'Weekly podcast about UFOs'),
  (3, 'The Daily News', 'https://dailynews.com', 'Major newspaper'),
  (2, 'Jane Doe', NULL, 'Independent UFO investigator'); -- Jane Doe is now a podcast source

-- Insert into entries
INSERT INTO entries (source_id, title, description, date_published, location) VALUES
  (1, 'Triangle UFO Over Nevada', 'A large triangular craft spotted at night.', '2024-01-15', 'Nevada, USA'),
  (2, 'Interview with Pilot Witness', 'Pilot describes close encounter.', '2024-02-10', 'Texas, USA'),
  (3, 'Strange Lights Reported', 'Multiple witnesses report strange lights.', '2024-01-20', 'London, UK'),
  (4, 'Personal Sighting in Park', 'Jane describes her own sighting.', '2024-03-05', 'Sydney, Australia');

-- Insert into craft
INSERT INTO craft (name, description, shape, notes) VALUES
  ('Black Triangle', 'Large, silent, triangular craft', 'triangle', 'Often seen at night'),
  ('Tic Tac', 'White, pill-shaped object', 'cylinder', 'Seen by Navy pilots'),
  ('Disk', 'Classic flying saucer', 'disk', 'Shiny metallic appearance');

-- Insert into entry_craft
INSERT INTO entry_craft (entry_id, craft_id) VALUES
  (1, 1), -- Triangle UFO Over Nevada -> Black Triangle
  (2, 2), -- Interview with Pilot Witness -> Tic Tac
  (3, 3), -- Strange Lights Reported -> Disk
  (4, 1); -- Personal Sighting in Park -> Black Triangle

-- Insert into people
INSERT INTO people (notes) VALUES
  ('Witness: John Smith'),
  ('Reporter: Jane Doe'),
  ('Pilot: Charles Brown');

-- Insert into entry_people
INSERT INTO entry_people (entry_id, people_id) VALUES
  (1, 1), -- John Smith witnessed Triangle UFO Over Nevada
  (2, 3), -- Charles Brown is the pilot in Interview with Pilot Witness
  (4, 2); -- Jane Doe is the reporter for Personal Sighting in Park