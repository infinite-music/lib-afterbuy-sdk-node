import { AfterbuyGlobal } from "./AfterbuyGlobal";

export interface AfterbuyRequest<CallName extends string, DetailLevel extends number = 0> {
  AfterbuyGlobal: AfterbuyGlobal<CallName, DetailLevel>;
}
