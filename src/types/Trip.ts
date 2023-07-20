export type TripType = {
  address: string;
  assigned_dropoff_window_end: string;
  assigned_dropoff_window_start: string;
  delimiter_index: number[];
  delivery_order: string;
  demand: string;
  demand_2: string;
  demand_2_cumul: string;
  demand_3: string;
  demand_3_cumul: string;
  demand_cumul: string;
  dropoff_window_end: string;
  dropoff_window_start: string;
  dropped_constraints: any[];
  extra_node_id: string;
  followed_constraints: any;
  lat: number;
  lng: number;
  node_id: string;
  node_name: string;
  package_no: string;
  route_polyline: RoutePolyline[];
  wait_time: number;
};

export type RoutePolyline = {
  lat: number;
  lng: number;
};
