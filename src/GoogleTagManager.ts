import DataLayerEvent from "./DataLayerEvent";
import { TagManagerBridge } from "./NativeBridges";

export default class GoogleTagManager {
  /**
   * Call once to open the container for all subsequent static calls.
   * @param {String} containerId
   * @returns {Promise<boolean>}
   */
  static openContainerWithId(containerId: string): Promise<boolean> {
    return TagManagerBridge.openContainerWithId(containerId);
  }

  /**
   * Retrieves a boolean value with the given key from the opened container.
   * @param {String} key
   * @returns {Promise<boolean>}
   */
  static boolForKey(key: string): Promise<boolean> {
    return TagManagerBridge.booleanForKey(key);
  }

  /**
   * Retrieves a string with the given key from the opened container.
   * @param {String} key
   * @returns {String}
   */
  static stringForKey(key: string): Promise<string> {
    return TagManagerBridge.stringForKey(key);
  }

  /**
   * Retrieves a number with the given key from the opened container.
   * @param {String} key
   * @returns {Promise<number>}
   */
  static doubleForKey(key): Promise<number> {
    return TagManagerBridge.doubleForKey(key);
  }

  /**
   * Push a datalayer event for Google Analytics through Google Tag Manager. The event must have at least one key "event" with event name.
   * You can add optional values on top of that, example: {event: "eventName", pageId: "/home"}
   * @param {Object} event An Map<String, Object> containing key and value pairs. It must have at least one key "event" with event name 
   * @returns {Promise<boolean>}
   */
  static pushDataLayerEvent(event: DataLayerEvent): Promise<boolean> {
    return TagManagerBridge.pushDataLayerEvent(event);
  }
}