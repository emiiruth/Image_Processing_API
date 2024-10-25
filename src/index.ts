import express, { Request, Response } from 'express';
import { resizePhoto } from './utilities/imageResize';
import path from 'path';
const app = express();
const port = 3000;

//api to resize and store photo, or display a error and a help suggestion
app.use('/api/resize', async (req: Request, res: Response): Promise<void> => {
  const imageName = req.query.imagename as string;

  const width = req.query.width as string;
  const height = req.query.height as string; //sets constants from api URL as resize dimensions

  const intWidth = parseInt(width); //parse from string to int
  const intHeight = parseInt(height);

  //invoke the resizePhoto function from imageResize in the utilities folder
  try {
    await resizePhoto(imageName, intWidth, intHeight); //use stored constants to set new properties
    res.set('Content-Type', 'image/jpeg');
    res.sendFile(
      path.resolve(
        __dirname,
        '..',
        'projectPics',
        'output',
        `resized${imageName}.jpg`,
      ),
    ); //display resized file on front end

    //catch the error and display to user along with common causes
  } catch (error) {
    res.send(
      `${error}. Check that image name matches a .jpg file in input folder and you have entered valid name, width, and height`,
    );
  }
});

app.listen(port, function (): void {
  console.log('running');
} as () => void);

export { app };
