import { resizePhoto } from './../utilities/imageResize';
import { app } from './../index';
import request from 'supertest';

//api test ensures endpoint is up and running
describe('API Test', (): void =>
  it('should return a successful response', async (): Promise<void> => {
    const response: request.Response = await request(app).get('/api/resize');
    expect(response.status).toBe(200); //expect successful response
  }));

//image processing test ensures that the resizePhoto function is working
// utilizes test.jpg in input folder
describe('Image Processing Test', (): void =>
  it('should return an image', (done: () => void): void => {
    const fileName: string = 'test';
    const width: number = 200;
    const height: number = 300;

    expect(resizePhoto(fileName, width, height)).toBeDefined(); //expect that resize photo is not returning undefined
    done();
  }));
