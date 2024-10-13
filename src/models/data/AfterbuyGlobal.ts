/**
 * The XML tag 'AfterbuyGlobal' must be present every time the interface is called.
 *
 * The global parameters are optional.
 * However, DetailLevel must be set for most calls in order to retrieve any data.
 */
export interface AfterbuyGlobal<CallName extends string, DetailLevel extends number | undefined = 0> {
  /** Name of the call (e.g. GetAfterbuyTime) */
  CallName: CallName;
  /**
   * Controls the amount of data that is retrieved.
   *
   * The values for DetailLevel can be specified so that only the required data is returned.
   * Using DetailLevel reduces traffic and increases transmission speed.
   * The DetailLevel can be defined by adding DetailLevel numbers together, e.g. `2 + 8 + 16 = 26`.
   * Each call has a default DetailLevel.
   **/
  DetailLevel?: DetailLevel;
  /**
   * Sets the language in which the errors or warnings are returned.
   *
   * If 'ErrorLanguage' is not passed, all errors/warnings are returned in German.
   **/
  ErrorLanguage?: string;
}

/**
 * The XML tag 'AfterbuyGlobal' must be present every time the interface is called.
 *
 * The global parameters are optional.
 * However, DetailLevel must be set for most calls in order to retrieve any data.
 * Each call has a default DetailLevel.
 */
export interface AfterbuyGlobalWithCredentials<CallName extends string, DetailLevel extends number | undefined = 0>
  extends AfterbuyGlobal<CallName, DetailLevel> {
  /** The partner token which is provided by Afterbuy */
  PartnerToken: string;
  /** The account token which is provided by Afterbuy */
  AccountToken: string;
}
