const aws = require('aws-sdk');
const athenaExpress = require('athena-express');

const awsConfig = {
  region: 'us-east-2',
  accessKeyId: '',
  secretAccessKey: ''
};

aws.config.update(awsConfig);

const athenaExpressConfig = { aws };

const getData = async () => {
  const athena = new athenaExpress(athenaExpressConfig);
  const query =
    'SELECT * FROM "AwsDataCatalog"."integracionfuentesotm"."tbl_centroexperiencias" WHERE "cen_lugar_origen"=ARGENTINA LIMIT 5';
  const result = await athena.query(query);

  console.log(result);
};

getData();
