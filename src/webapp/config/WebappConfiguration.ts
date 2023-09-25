import type { FreEnvironment } from "@freon4dsl/core";
import { LanguageInitializer } from "../language/LanguageInitializer";
import type { IServerCommunication } from "../server/IServerCommunication";
import { ServerCommunication } from "../server/ServerCommunication";


/**
 * The one and only reference to the actual language for which this editor runs
 */
import { LionCoreM3Environment } from "../../picode/config/gen/LionCoreM3Environment";
export const editorEnvironment: FreEnvironment = LionCoreM3Environment.getInstance();
LanguageInitializer.initialize();

/**
 * The one and only reference to the server on which the models are stored
 */
export const serverCommunication: IServerCommunication = ServerCommunication.getInstance();
// export const serverCommunication: IServerCommunication = MpsServerCommunication.getInstance();
