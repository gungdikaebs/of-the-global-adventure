<script setup>
defineProps({
    src: {
        type: String,
        required: true
    }
})
</script>
<template>
    <iframe :src="src" width="100%" height="300" style="border:0;" allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>