/*
 *	This program reads in all of the *.js files inside of the src
 *	directory and compiles them all into one file for ease of
 *	deployment of SoBr.
 *
 *	Author: Douglas Schneider
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define FILES "files.txt"
#define FIND_COMMAND "find src -type f -name \"*.js\" > files.txt"
#define MAX_SIZE 500
#define OUTPUT_FILE "SoBrMain.js"

void processFile(char * fileName);
void killAll(char * error);

FILE * input = NULL;
FILE * output = NULL;
FILE * files = NULL;

/*
 * This small program copies all of the source from files inside of the
 * src folder and puts them into one file that can then be loaded into
 * the html file to run SoBr.
 */
int main()
{
	extern FILE * output;
	extern FILE * files;

	char fileName[MAX_SIZE];

	system(FIND_COMMAND);
	files = fopen(FILES, "r");
	if(files == NULL)
		killAll("Error opening the list of files");
	output = fopen(OUTPUT_FILE, "w");
	if(output == NULL)
		killAll("Error creating the output file");
	// loop through all of the js files
	while(fgets(fileName, MAX_SIZE, files) != NULL)
	{
		// remove the '\n' from the fileName
		int i = strlen(fileName);
		fileName[i - 1] = '\0';

		processFile(fileName);
	}

	// close files
	fclose(files);
	fclose(output);

	printf("Done processing the files, output should now be in %s\n", OUTPUT_FILE);

	return 0;
}

/*
 *	Open the specified file and copy all of it's contents
 *	over to the output file. The file is given a header with
 *	the input files name.
 */
void processFile(char * fileName)
{
	extern FILE * input;
	extern FILE * output;

	char line[MAX_SIZE];

	input = fopen(fileName, "r");
	if(input == NULL)
		killAll("Error opening input file");
	fprintf(output, "//---------------- starting %s -----------------------//\n", fileName);
	while(fgets(line, MAX_SIZE, input) != NULL)
		fprintf(output, "%s", line);

	fclose(input);
}

/*
 *	Close any file pointers, print the specified error message
 *	and exit the program.
 */
void killAll(char * error)
{
	extern FILE * input;
	extern FILE * output;
	extern FILE * files;
	
	if(input != NULL)
		fclose(input);
	if(output != NULL)
		fclose(output);
	if(files != NULL)
		fclose(files);

	printf("Error: %s\nDying now!\n", error);
	exit(-1);
}
