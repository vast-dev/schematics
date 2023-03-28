# Vast Schematics
This library is responsible for generating NestJS code using Angular schematics. 


## Guidelines
Schematics in this repo should follow a few rules:
 - They should have no knowledge of Vast JSON files
 - Any files processed by schematics should contain one of the following:
     - ASTs in JSON format
     - Raw code
 - They should not contain any logic for processing Vast meta JSON files 


## Packages  
Vast is made up of several packages spread across different repositories.

| Package | Description        |
|---------|--------------------|
| [Core](https://github.com/vast-dev/vast) | Contains all the logic for processing JSON files and calling the corresponding schematics. |
| [Meta Schematics](https://github.com/vast-dev/meta-schematics) | An Angular Schematic library used to generate Vast JSON files |
| [Schematics](https://github.com/vast-dev/schematics) | An Angular Schematic library used to generate NestJS code from Vast JSON files |
| [Vast CLI](https://github.com/vast-dev/vast-cli) | A CLI tool for generating Vast projects and compiling them to Typescript |
