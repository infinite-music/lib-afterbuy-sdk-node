import { AfterbuyGlobal, AfterbuyGlobalFull } from "./data/AfterbuyGlobal";

export interface AfterbuyRequest<CallName extends string, DetailLevel extends number = 0> {
  AfterbuyGlobal: AfterbuyGlobal<CallName, DetailLevel>;
}

export type AfterbuyRequestFull<Request extends AfterbuyRequest<string, number>> = {
  Request: Request & {
    AfterbuyGlobal: AfterbuyGlobalFull<Request["AfterbuyGlobal"]["CallName"], Request["AfterbuyGlobal"]["DetailLevel"]>;
  };
};

export type AfterbuyRequestData<Request extends AfterbuyRequest<string, number>> = Omit<Request, "AfterbuyGlobal">;
