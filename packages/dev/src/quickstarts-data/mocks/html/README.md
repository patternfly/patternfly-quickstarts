To build the HTML from the adoc:

clone pantheon from https://github.com/redhataccess/pantheon
Set the env var `PANTHEON_DIR` to the location of this checkout
install asciidoctor and other supporting gems sudo gem install asciidoctor haml tilt
generate the html - in the `src/quickstarts-data/mocks/asciidoc` dir run

```asciidoctor -o adding_health_checks.quickstart.html -T ${PANTHEON_DIR}/pantheon-bundle/src/main/resources/apps/pantheon/templates/haml/html5 assemblies/assembly_adding_health_checks.adoc -a qs=true```
