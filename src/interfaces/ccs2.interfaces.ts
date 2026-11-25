import { VehicleOdometer } from './common.interfaces';

/** CCS2 `state.Vehicle` payload from `/ccs2/carstatus` endpoints. */
export interface Ccs2VehicleState {
  Date?: string;
  Location?: Ccs2VehicleLocation;
  Drivetrain?: {
    Odometer?: VehicleOdometer;
    FuelSystem?: {
      DTE?: {
        Gas?: number;
        Total?: number;
        EV?: number;
      };
    };
  };
  Body?: {
    Hood?: { Open?: boolean | number };
    Trunk?: { Open?: boolean | number };
  };
  Cabin?: {
    Door?: {
      Row1?: {
        Passenger?: { Lock?: boolean | number; Open?: boolean | number };
        Driver?: { Lock?: boolean | number; Open?: boolean | number };
      };
      Row2?: {
        Left?: { Lock?: boolean | number; Open?: boolean | number };
        Right?: { Lock?: boolean | number; Open?: boolean | number };
      };
    };
    HVAC?: {
      Row1?: {
        Driver?: {
          Temperature?: { Value?: string };
        };
      };
    };
    SteeringWheel?: {
      Heat?: { State?: boolean | number };
    };
  };
  Chassis?: {
    Axle?: {
      Row1?: {
        Left?: { Tire?: { PressureLow?: boolean | number } };
        Right?: { Tire?: { PressureLow?: boolean | number } };
      };
      Row2?: {
        Left?: { Tire?: { PressureLow?: boolean | number } };
        Right?: { Tire?: { PressureLow?: boolean | number } };
      };
      Tire?: { PressureLow?: boolean | number };
    };
  };
  Electronics?: {
    PowerSupply?: {
      Ignition1?: boolean | number;
      Ignition3?: boolean | number;
      Accessory?: boolean | number;
    };
    Battery?: { Level?: number };
  };
  Green?: {
    Location?: Ccs2VehicleLocation;
    ChargingInformation?: {
      ConnectorFastening?: { State?: unknown };
      Charging?: { RemainTime?: number };
      EstimatedTime?: {
        Quick?: number;
        ICCB?: number;
        Standard?: number;
      };
    };
    BatteryManagement?: {
      BatteryRemain?: { Ratio?: number };
    };
  };
}

export interface Ccs2VehicleLocation {
  coord?: { lat: number; lon: number; alt?: number; type?: number };
  head?: number;
  speed?: { value: number; unit: number };
  accuracy?: { hdop?: number; pdop?: number };
  time?: string;
}