<script>
import { showFooter } from "$lib/stores/app.store";

let _showFooter = true;
showFooter.subscribe((value) => {
  _showFooter = value;
});
</script>

{#if _showFooter}
<footer>
    <div class="footer_copyright">Made for CropWatch LLC with &hearts;</div>
</footer>
{/if}
