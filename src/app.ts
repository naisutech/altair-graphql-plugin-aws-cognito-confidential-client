import * as AWS from "aws-sdk";
import { PluginBase } from "altair-graphql-core/build/plugin/base";

class AltairGraphQLPluginAwsCognitoConfidentialClient extends PluginBase {
  initialize(ctx: any) {
    ctx.events.on("app-ready", () => {
      console.log(ctx);
    });
  }

  async destroy() {
    //
  }
}

if ((window as any)["AltairGraphQL"])
  (window as any)["AltairGraphQL"].plugins[
    "AltairGraphQLPluginAwsCognitoConfidentialClient"
  ] = AltairGraphQLPluginAwsCognitoConfidentialClient;
