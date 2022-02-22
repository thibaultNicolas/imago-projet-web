use imagovalid;

ALTER TABLE `client` 
RENAME TO  `Clients` ;
ALTER TABLE `Clients` 
CHANGE COLUMN `no_client` `NoClient` INT NOT NULL AUTO_INCREMENT ;
ALTER TABLE `imagovalid`.`Clients` 
CHANGE COLUMN `no_client_interne` `NoClientInterne` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ;


-- Table Client
ALTER TABLE `Clients` 
CHANGE COLUMN `NoClient` `No` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `NoClientInterne` `NoInterne` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `nom_client` `Nom` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_rue_client` `Rue` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_ville_client` `Ville` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_cod_pos_1_client` `CodePostal` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_cod_pos_2_client` `CodePostal2` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_region_client` `Region` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `adr_pays_client` `Pays` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_ind_client` `IndicatifTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_ech_client` `EchTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_no_client` `NumeroTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_poste_client` `PosteTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_free_ind_client` `FreeIndicatifTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_free_ech_client` `FreeEchTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_free_no_client` `FreeNumeroTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_free_poste_client` `FreePosteTel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `fax_ind_client` `FaxIndicatif` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `fax_ech_client` `FaxEch` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `fax_no_client` `FaxNumero` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `courriel_client` `Courriel` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `site_internet_client` `Website` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_charge_projet_client` `NoChargeProjet` INT NOT NULL ;

-- Table Etat
ALTER TABLE `etat` 
CHANGE COLUMN `no_etat` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `nom_etat` `Nom` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ;

-- Table Fichier
ALTER TABLE `fichier` 
CHANGE COLUMN `no_fichier` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `nom_fichier` `Nom` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_projet` `NumeroProjet` INT NOT NULL DEFAULT '0' ;

-- Table FichierProjet
ALTER TABLE `fichier_projet` 
CHANGE COLUMN `no_fichier_projet` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `fichier_fichier_projet` `Fichier` VARCHAR(200) NOT NULL ,
CHANGE COLUMN `description_fichier_projet` `Description` VARCHAR(500) NOT NULL ,
CHANGE COLUMN `date_fichier_projet` `Date` DATETIME NOT NULL ,
CHANGE COLUMN `no_projet` `NumeroProjet` VARCHAR(200) NOT NULL ;

-- Historique avis courriel
ALTER TABLE `historique_avis_courriel` 
CHANGE COLUMN `no_avis` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `date_heure_avis` `DateHeure` DATETIME NOT NULL ,
CHANGE COLUMN `pourcentage_avis` `Pourcentage` INT NOT NULL ,
CHANGE COLUMN `no_projet_avis` `NoProjet` INT NOT NULL ,
CHANGE COLUMN `no_livrable_avis` `NoLivrable` INT NOT NULL ,
CHANGE COLUMN `no_charge_projet_avis` `NoChargeProjet` INT NOT NULL ;

-- Table indice
ALTER TABLE `indice` 
CHANGE COLUMN `no_indice` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `indice` `Indice` INT NOT NULL DEFAULT '0' ;

-- Table IndiceProjet
ALTER TABLE `indice_projet` 
CHANGE COLUMN `no_indice_projet` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `indice_projet` `Indice` INT NOT NULL DEFAULT '0' ;

-- Table Livrable
ALTER TABLE `livrable` 
CHANGE COLUMN `no_livrable` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `nom_livrable` `Nom` VARCHAR(400) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `date_livrable` `Date` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_projet` `NoProjet` INT NOT NULL ,
CHANGE COLUMN `total_h_soumission_livrable` `TotalHeureSoumission` INT NOT NULL ,
CHANGE COLUMN `total_m_soumission_livrable` `TotalMinuteSoumission` INT NOT NULL ,
CHANGE COLUMN `total_num_soumission_livrable` `TotalNumSoumission` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `nos_factures_livrable` `NosFactures` VARCHAR(500) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_etat_livrable` `NoEtat` INT NOT NULL DEFAULT '1' ;

-- Table Projet
ALTER TABLE `projet` 
CHANGE COLUMN `no_projet` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `nom_projet` `Nom` VARCHAR(400) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `nom_contact_projet` `NomContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_ind_contact_projet` `TelIndicatifContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_ech_contact_projet` `TelEchContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_no_contact_projet` `TelNoContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `tel_poste_contact_projet` `TelPosteContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `courriel_contact_projet` `CourrielContact` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_charge_projet` `NoChargeProjet` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `date_ouverture_projet` `DateOuverture` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `date_fermeture_projet` `DateFermeture` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `nos_factures_projet` `NosFacture` VARCHAR(500) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `description_projet` `Description` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `fichier_soumission_projet` `FichierSoumission` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `total_prix_soumission_projet` `TotalPrixSoumission` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `total_h_soumission_projet` `TotalHeureSoumission` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `total_m_soumission_projet` `TotalMinutesSoumission` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `total_num_soumission_projet` `TotalNumSoumission` DECIMAL(13,2) NOT NULL DEFAULT '0.00' ,
CHANGE COLUMN `no_client` `NoClient` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `ind_livrable` `IndLivrable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_archive` `IndArchive` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `to_not_charge` `ToNotCharge` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `backup_projet` `Backup` VARCHAR(200) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ;

-- Table temps
ALTER TABLE `temps` 
CHANGE COLUMN `no_temps` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `no_projet` `NoProjet` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `no_utilisateur` `NoUtilisateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `date_temps` `Date` DATE NOT NULL ,
CHANGE COLUMN `duree_h_temps` `DureeHeure` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_m_temps` `DureeMinutes` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_num_temps` `DureeNum` DECIMAL(13,2) NOT NULL DEFAULT '0.00' ,
CHANGE COLUMN `description_temps` `Description` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `note_interne_temps` `NotesInterne` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `a_facture` `AFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_facture` `IndFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `temps_a_facture` `TempsAFacturer` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `approbateur_temps` `Approbateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `ind_facturable` `IndFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_facturable` `HeureFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_facturable` `MinutesFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_facturable` `NumFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `ind_non_facturable` `IndNonFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_non_facturable` `HeureNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_non_facturable` `MinutesNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_non_facturable` `NumNonFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `no_livrable` `NoLivrable` INT NOT NULL ,
CHANGE COLUMN `date_heure_timestamp` `DateHeureTimeStamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ;

-- Table temps 11h26
ALTER TABLE `temps_2016-01-13_11h26` 
CHANGE COLUMN `no_temps` `id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `no_projet` `NoProjet` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `no_utilisateur` `NoUtilisateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `date_temps` `Date` DATE NOT NULL ,
CHANGE COLUMN `duree_h_temps` `Heure` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_m_temps` `Minute` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_num_temps` `Num` DECIMAL(13,2) NOT NULL DEFAULT '0.00' ,
CHANGE COLUMN `description_temps` `Description` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `note_interne_temps` `NoteInterne` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `a_facture` `AFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_facture` `IndFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `temps_a_facture` `TempsAFacturer` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `approbateur_temps` `Approbateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `ind_facturable` `IndFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_facturable` `HeureFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_facturable` `MinutesFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_facturable` `NumFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `ind_non_facturable` `IndNonFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_non_facturable` `HeureNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_non_facturable` `MinutesNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_non_facturable` `NumNonFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `no_livrable` `NoLivrable` INT NOT NULL ;

-- Table temps 11h36
ALTER TABLE `temps_2016-01-13_11h36` 
CHANGE COLUMN `no_temps` `id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `no_projet` `NoProjet` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `no_utilisateur` `NoUtilisateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `date_temps` `Date` DATE NOT NULL ,
CHANGE COLUMN `duree_h_temps` `Heure` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_m_temps` `Minute` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `duree_num_temps` `Num` DECIMAL(13,2) NOT NULL DEFAULT '0.00' ,
CHANGE COLUMN `description_temps` `Description` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `note_interne_temps` `NoteInterne` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `a_facture` `AFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_facture` `IndFacture` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `temps_a_facture` `TempsAFacturer` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `approbateur_temps` `Approbateur` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `ind_facturable` `IndFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_facturable` `HeureFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_facturable` `MinutesFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_facturable` `NumFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `ind_non_facturable` `IndNonFacturable` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_h_non_facturable` `HeureNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_m_non_facturable` `MinutesNonFacturable` VARCHAR(20) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `temps_num_non_facturable` `NumNonFacturable` DECIMAL(13,2) NOT NULL ,
CHANGE COLUMN `no_livrable` `NoLivrable` INT NOT NULL ;

-- Table utilisateur
ALTER TABLE `utilisateur` 
CHANGE COLUMN `no_utilisateur` `Id` INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN `prenom_utilisateur` `Prenom` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `nom_utilisateur` `Nom` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `courriel_utilisateur` `Courriel` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `nom_usager_utilisateur` `Username` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `mot_passe_utilisateur` `Password` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `no_acces_utilisateur` `NoAcces` INT NOT NULL DEFAULT '0' ,
CHANGE COLUMN `ind_inactif_utilisateur` `IndInactif` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_acces_fichier_entete_projet` `IndAccesFichierEnteteProjet` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ,
CHANGE COLUMN `ind_dispo_liste_charges_projet` `IndDispoListeChargesProjet` VARCHAR(5) CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL DEFAULT 'false' ;

-- Table Acces Utilisateur
ALTER TABLE `acces_utilisateur` 
CHANGE COLUMN `no_acces` `Id` INT NOT NULL AUTO_INCREMENT,
CHANGE COLUMN `nom_acces` `Nom` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL ,
CHANGE COLUMN `abbrev_acces` `Abbrev` LONGTEXT CHARACTER SET 'latin1' COLLATE 'latin1_general_ci' NOT NULL , RENAME TO  `AccesUtilisateur` ;



-- Rename Tables
ALTER TABLE `utilisateur`
RENAME TO  `Utilisateur` ;
ALTER TABLE `etat` 
RENAME TO  `Etat` ;
ALTER TABLE `fichier` 
RENAME TO  `Fichier` ;
ALTER TABLE `fichier_projet` 
RENAME TO  `FichierProjet` ;
ALTER TABLE `historique_avis_courriel` 
RENAME TO  `HistoriqueAvisCourriel` ;
ALTER TABLE `indice` 
RENAME TO  `Indice` ;
ALTER TABLE `indice_projet` 
RENAME TO  `IndiceProjet` ;
ALTER TABLE `livrable` 
RENAME TO  `Livrable` ;
ALTER TABLE `projet` 
RENAME TO  `Projet` ;
ALTER TABLE `temps` 
RENAME TO  `Temps` ;
ALTER TABLE `temps_2016-01-13_11h26` 
RENAME TO  `Temps_2016-01-13_11h26` ;
ALTER TABLE `temps_2016-01-13_11h36` 
RENAME TO  `Temps_2016-01-13_11h36` ;

DROP TABLE `Temps_2016-01-13_11h26`;
DROP TABLE `Temps_2016-01-13_11h36`;