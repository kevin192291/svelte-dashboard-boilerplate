<script lang="ts">
  import { DevicesApi } from './_api';

  const devices = new DevicesApi();
  debugger;
  devices.GetAll().then(response => {
    console.log(response);
  });
</script>