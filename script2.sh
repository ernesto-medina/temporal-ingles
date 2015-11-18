#!/usr/bin/bash
files=$(find . -name "index.js");
for file in $files
do
	#dir="$(dirname "$file")"
	echo $file
	sudo perl -p -i -e "s/\}else\ if\(radio\ \<\ filas\)\{/\}if\(radio\ \<\ filas\)\{/g" `find ./ -name "index.js"`
 	#sudo perl -p -i -e "s/document\.getElementById\(\'playImage\'\)\.focus\(\)\;/\/\/document\.getElementById\(\'playImage\'\)\.focus\(\)\;/g" `find ./ -name "index.html"`
done
# sudo perl -p -i -e "s/\}else\ if\(radio\ \<\ filas\)\{/\}if\(radio\ \<\ filas\)\{/g" `find ./ -name "index.js"`
# rename y/_/\ / *
