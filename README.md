# Octo

Is the API for communicating with the Great Beyond servers (Minecraft servers).

Octo has to be placed on the Minecraft server that you wish to control remotely. It should be placed inside a folder called "octo" inside the Minecraft instance.

It will only action commands by ops and it validates ops by matching an op to an email address in the database.

It is a fork of: https://github.com/dooburt/minecraft-server-manager

### Table of the (🍊 juicy) contents

- 🚀 [Getting Started](#getting-started)
- 📓 [Create React App Documentation](#create-react-app-documentation)

### 🚀 Getting Started

`npm i` as usual.

Then `npm start`

## Getting Started

Run `npm i` as normal.

Update the `.env` file. Octo requires the modpack (or Minecraft) to be running as a service and to also be executed using an infinite loop bash (see Modpack Launch Sequence). The env file specified where files and commands are for the server you wish Octo to manage. For example:

```toml
SERVER_PATH="/opt/minecraft/dawncraft/"
SERVER_SERVICE_PATH="/etc/systemd/system/dawncraft.service"
```

## Modpack Launch Sequence

Typically, it is best to run modpacks on a server as a service. This ensures they start when the machine does, restart when things go bad and can be managed by the OS correctly.

Within the `/core/service` directory is an example modpack.service file. This should be created and added to the services of the machine. For example, on Ubuntu, you would create the service with nano in the `/etc/systemd/system/` directory, reload the daemon with `systemctl daemon-reload` and start it with `systemctl start yourservice.service`. You can tail the stdout with `journalctl -f -u yourservice.service`.

Within the example service, this points at a shell executable (see `/core/executor/`). This file ensures that if the Minecraft server crashes (not the system service), it restarts. This is done using an infinite loop as demonstrated. This file would need to be updated if the execution arguments for the server changed. (DawnCraft for example uses a user_jvm_args.txt and points at specific version of Forge - which may get updated).

As Octo is opinionated on how to run your server and services using these methods, some functions (such as start, stop and restart) are only available if this setup exists and it has been specified within the .env file.
