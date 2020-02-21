import React from "react";
import CreateParkingForm from "./CreateParkingForm";
import LeaveVehicleForm from "./LeaveVehicleForm";
import ParkStatusForm from "./ParkStatusForm";
import ParkVehicleForm from "./ParkVehicleForm";
import { Grid } from "@material-ui/core";

const App = () => {
    <div>
        <Grid>
            <h2>Create parking</h2>
            <CreatePark ingForm />
        </Grid>
        <Grid>
            <h2>Leave Vehicle</h2>
            <LeaveVehicleForm />
        </Grid>
        <Grid>
            <h2>Park Vehicle</h2>
            <ParkVehicleForm />
        </Grid>
        <Grid>
            <h2>Status</h2>
            <ParkStatusForm />
        </Grid>
    </div>
};
export default App;