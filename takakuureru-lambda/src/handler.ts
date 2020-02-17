import { uuid } from 'uuidv4';
import aws from 'aws-sdk';

export const getSignedUrl = async (event, context) => {
  const s3 = new aws.S3();
  const bucketName = 'takakuureru-images';

  if (event.body !== null && event.body !== undefined) {
    const objKey = uuid();

    let body = JSON.parse(event.body)

    if (!body.contentType) {
      context.fail({ err: 'Missing contentType' })
    }

    const uploadUrl = await s3.getSignedUrl('putObject', {
      Bucket: bucketName,
      Key: objKey,
      Expires: 3600,
      ContentType: body.contentType,
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ uploadUrl })
    };
  }
};
