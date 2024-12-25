<template>
	<div id="main">
		222222
	</div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";

onMounted(() => {
	window.ipcRenderer.on('testtest', (_event, ...args) => {
		console.log('[Receive testtest]:', ...args)
	})
	window.ipcRenderer.on('messagePort', (event, data) => {
		console.log('data')
	})
	console.log('Is ipcRenderer defined?', window.ipcRenderer);
})

</script>
