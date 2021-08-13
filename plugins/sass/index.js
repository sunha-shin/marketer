module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
        await run.command(
            "node-sass scss/style.scss scss/style.css"
        );
    },
};