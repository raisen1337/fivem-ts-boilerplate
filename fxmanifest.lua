fx_version 'cerulean'

game 'gta5'

-- set name
name 'FiveM Typescript boilerplate'
description 'FiveM Typescript boilerplate'

-- set author
author 'Raisen - [notraisen on Discord]'

-- set version
version '1.0.0'

-- set repository
repository 'https://github.com/raisen1337/fivem-ts-boilerplate'

-- set dependencies

client_scripts {
    'dist/client/*.bundle.js'
    'dist/client/**/*.bundle.js'
}

server_scripts {
    'dist/server/*.bundle.js'
    'dist/server/**/*.bundle.js'
}