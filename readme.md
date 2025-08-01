Template repo for a new package (system or module) for FVTT.

How to use:
- Clone this repository or use as a github template.
- [Optional] Rename relevant files to your liking.
- Add a `module.json` or `system.json` manifest. You can use one of the `_manifest-<package type>.json` files or just remove both of them.
- Change all instances of `<REPLACE_ME>` with fitting values.
- Replace uses of `<module|system>` everywhere with either `module` or `system`.
- [Optional] Remove `package-lock.json` and run `npm i`.
- Run `npm ci`.
