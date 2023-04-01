#!/bin/bash

# Récupérer le chemin du dossier parent
echo "Veuillez entrer le chemin du dossier parent : "
read parent_dir

# Vérifier que le dossier existe
if [ ! -d "$parent_dir" ]; then
    echo "Le dossier parent n'existe pas"
    exit 1
fi

# Itérer à travers chaque sous-dossier et générer le fichier JSON
echo "[" > files.json
for subdir in "$parent_dir"/*; do
    if [ -d "$subdir" ]; then
        subdir_name=$(basename "$subdir")
        for file in "$subdir"/*; do
            if [ -f "$file" ]; then
                filename=$(basename "$file")
                filename_noext="${filename%.*}"
                element_id="${filename_noext// /_}"
                new_filename="${filename_noext// /_}.mp3"
                mv "$file" "$subdir/$new_filename"
                title=$(echo "$filename_noext" | tr "'" " ")
                element_id=$(echo "$element_id" | tr "'" " ")
                url="../resources/songs/$subdir_name/${new_filename// /%20}"
                echo "{ elementId: '$element_id', url: '$url', type: Type.$subdir_name, title: '$title'}," >> files.json
            fi
        done
    fi
done
echo "]" >> musicsList.json

echo "Le fichier JSON a été généré avec succès et les noms de fichiers MP3 et les URLs ont été modifiés avec des underscores et des %20 respectivement !" 
