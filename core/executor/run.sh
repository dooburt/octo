#!/usr/bin/env sh
# Forge requires a configured set of both JVM and program arguments
# Add custom JVM arguements to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
# pass them to this script directly
while true; do
    java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.2-40.2.4/unix_args.txt "$@"
    echo "Starting Dawncraft Server in 3 seconds..."
    sleep 3
done