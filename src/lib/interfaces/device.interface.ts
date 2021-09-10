export interface ApplicationIds {
  application_id: string;
}

export interface Ids {
  device_id: string;
  application_ids: ApplicationIds;
  dev_eui: string;
  join_eui: string;
}

export interface EndDevice {
  ids: Ids;
  created_at: Date;
  updated_at: Date;
}

export interface Devices {
  end_devices: EndDevice[];
}