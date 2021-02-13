-- -----------------------------------------------------
-- Création tables argonautes
-- -----------------------------------------------------

BEGIN;

-- Comme c'est un script de création de tables ont s'assure que celles-ci
-- Soit supprimées avant de les créées.
-- On peut supprimer plusieurs tables en même temps
DROP TABLE IF EXISTS "argonautes";

-- --------------------------------------------------------------------------
-- Table "argonautes"
-- --------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "argonautes" (
"id" SERIAL PRIMARY KEY,
"name" TEXT NOT NULL,
"created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
"updated_at" TIMESTAMP WITH TIME ZONE 
);

-- TIMESTAMP WITH TIME ZONE et TIMESTAMPTZ sont la même chose


COMMIT;
