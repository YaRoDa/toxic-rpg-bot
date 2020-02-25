module.exports = {
    getOwnURL: (req) => {
        // toxic-rpg-bot-op5n7wi5e.now.sh
        const domain = req.headers['x-now-deployment-url'];
        return `https://${domain}`;
    },
}