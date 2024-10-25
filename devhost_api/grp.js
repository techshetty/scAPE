const User = require('./models/user.js');
const xlsx = require('xlsx');
const fs = require('fs');
const { evn } = require('./mailer.js');
async function genResult() {
    try {
        const users = await User.find({}, { username: 1, eventDet: 1 }).lean();
        const eventGroup = {};
        users.forEach(user => {
            user.eventDet.forEach(event => {
                const { event_id, members } = event;
                if (!eventGroup[event_id]) {
                    eventGroup[event_id] = [];
                }
                eventGroup[event_id].push({
                    username: user.username,
                    members: members
                });
            });
        });
        for (const [eventId, teams] of Object.entries(eventGroup)) {
            var tc=0;
            excelData=[]
            teams.forEach(team => {
                team.members.forEach((member, index) => {
                    excelData.push({
                        Team: `T-ID: ${tc}`,
                        MemberName: member.name,
                        Email: member.email
                    });
                });
                tc++;
                excelData.push({})
            });
            excelData.push([]);
            genSheet(eventId,excelData);
        }
    } catch (error) {
        console.error("Error generating Excel sheet:", error);
    }
}
genResult();
const genSheet=(sname,excelData)=>{
    const worksheet = xlsx.utils.json_to_sheet(excelData.flat());
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Event Teams");
    const filePath = `./tempfiles/${evn[sname]}.xlsx`;
    xlsx.writeFile(workbook, filePath);
    console.log(`Excel file generated`);
}