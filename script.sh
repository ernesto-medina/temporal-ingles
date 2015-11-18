#!/usr/bin/bash
files=$(find . -name "CPM.js");
for file in $files
do
	dir="$(dirname "$file")"
	echo $dir
	sudo perl -p -i -e 's/document\.getElementById\(\"playImage\"\)\.focus\(\)\;/\/\*document\.getElementById\(\"playImage\"\)\.focus\(\)\;\*\//g' `find ./ -name "CPM.js"`
done

#sudo perl -p -i -e 's/\/\*document\.getElementById\(\"playImage\"\)\.focus\(\)\;\*\//\/\*document\.getElementById\(\"playImage\"\)\.focus\(\)\;\*\//g' `find ./ -name "CPM.js"`
#remplaza los if de true or false
# sudo perl -p -i -e "s/\}else\ if\(radio\ \<\ filas\)\{/\}if\(radio\ \<\ filas\)\{/g" `find ./ -name "index.js"`

#remplaza escacio en blanco por _
# rename y/_/\ / *
# rename y/\ /_/ *

#remplaza el focus() captivate 7
#files=$(find . -name "index.html");
#for file in $files
#do
#	dir="$(dirname "$file")"
#	echo $dir
#	sudo perl -p -i -e "s/document\.getElementById\(\'playImage\'\)\.focus\(\)\;/\/\/document\.getElementById\(\'playImage\'\)\.focus\(\)\;/g" `find ./ -name "index.html"`
#done

#remplaza el focus() captivate 8
#files=$(find . -name "CPM.js");
#for file in $files
#do
#	dir="$(dirname "$file")"
#	echo $dir
#	sudo perl -p -i -e "s/document\.getElementById\(\'playImage\'\)\.focus\(\)\;/\/\*document\.getElementById\(\"playImage\"\)\.focus\(\)\;\*\//g" `find ./ -name "CPM.js"`
#done