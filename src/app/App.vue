<template>
    <div>
        <h1>Hello World!</h1>
        <p>
            We are using Node.js <span id="node-version"></span>, Chromium
            <span id="chrome-version"></span>, and Electron
            <span id="electron-version"></span>.
        </p>
        <p>
            {{ message }}
        </p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            message: "Hello Vue!",
        };
    },
};
</script>

<style>
</style>