# Azure Functions custom handlers demo

## Setup

Run `npm install` to install the dependencies.

## Configuration

The *local.settings-example.json* is provided to show what values the app is expecting to read from environment variables. Make a copy of *local.settings-example.json* and rename it *local.settings.json* and replace any values that begin with "**YOUR_**".

## Running the app

The easiest way to experiment with this app is to use [Visual Studio Code](https://code.visualstudio.com) with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.

Launch a debug session and then open the *routes.http* file. Click on a **Send Request** link to issue requests to the development server with the associated payloads.

> Note: This demo is a work-in-progress for some upcoming features in Azure Functions. The repo is public to foster collaboration, but is not meant for use in any environment at the moment.
