# Based on https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

# https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Package_your_extension_
package:
	zip -r -FS /tmp/fuckrep.zip *
	@echo 'Upload to https://addons.mozilla.org/en-US/developers/addon/fuckrep/versions/submit/'
