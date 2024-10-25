import sharp from 'sharp';
import path from 'path';

async function resizePhoto( //function that handles the actual resizing
  fileName: string,
  width: number,
  height: number,
): Promise<void> {
  const imagePath = path.resolve(
    __dirname,
    '..',
    '..',
    'projectPics',
    'input',
    `${fileName}.jpg`,
  );
  // `/Users/eruth/fullstack_course/assignment_1/projectPics/input/${fileName}.jpg`; //set where to get image from
  const outputPath = path.resolve(
    __dirname,
    '..',
    '..',
    'projectPics',
    'output',
    `resized${fileName}.jpg`,
  );
  //`/Users/eruth/fullstack_course/assignment_1/projectPics/output/resized${fileName}.jpg`; //set where to put final image
  const imageBuffer = await sharp(imagePath).resize(width, height).toBuffer(); //creates a new photo out of the input and converts to buffer
  await sharp(imageBuffer).toFile(outputPath); //converts the buffer back to the file and stores in the output path
}

export { resizePhoto };
