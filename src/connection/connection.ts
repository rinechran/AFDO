import { Resgion }  from "./Define";
import * as _ from "lodash";

module.exports = {
  docClient: new AWS.DynamoDB.DocumentClient(),
  lambda: new AWS.Lambda(),
};
  

class AWSConfig{
  region: Resgion;
  ip : String;

}
class ConnectionImpe{
  mAwsConfig: AWSConfig;
  connect(config: AWSConfig){
    this.mAwsConfig = new AWSConfig();
    this.mAwsConfig = config;
  }

}
class Connection {
    private static instance: ConnectionImpe;
    static getinstance (): ConnectionImpe{
      if(!Connection.instance) {
        Connection.instance = new ConnectionImpe();
      }
      return Connection.instance;
    }
}