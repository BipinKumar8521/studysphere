const { createCanvas, loadImage, registerFont } = require("canvas");
const QRCode = require("qrcode");
const fs = require("fs");

const templatePath = "util\\participation2024.png";
const fontPath =
	"C:\\Users\\bipin\\OneDrive\\Desktop\\vs code\\spAts\\2024\\nssc-2024\\src\\util\\Monotype Corsiva.ttf"; // Update this path to the actual font file location

// Register the custom font
registerFont(fontPath, { family: "Monotype Corsiva" });

export async function generateCertificate(
	name,
	pid,
	college,
	event,
	verificationLink,
	outputPath
) {
	try {
		const template = await loadImage(templatePath);
		const canvas = createCanvas(template.width, template.height);
		const ctx = canvas.getContext("2d");
		ctx.drawImage(template, 0, 0);

		ctx.font = "100px 'Monotype Corsiva'";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(name, 2100, 1210);

		ctx.font = "65px 'Monotype Corsiva'";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(pid, 1125, 986);

		ctx.font = "100px 'Monotype Corsiva'";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(college, 1572, 1350);

		ctx.font = "100px 'Monotype Corsiva'";
		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.fillText(event, 1050, 1490);

		const qrCodeDataURL = await QRCode.toDataURL(verificationLink, {
			width: 386,
		});
		const qrCodeImage = await loadImage(qrCodeDataURL);
		const qrCodeSize = 386;
		const borderSize = 5;
		const qrX = 1530;
		const qrY = 1900;

		ctx.fillStyle = "#000000";
		ctx.fillRect(
			qrX - borderSize,
			qrY - borderSize,
			qrCodeSize + 2 * borderSize,
			qrCodeSize + 2 * borderSize
		);

		ctx.drawImage(qrCodeImage, qrX, qrY, qrCodeSize, qrCodeSize);

		const buffer = canvas.toBuffer("image/png");
		fs.writeFileSync(outputPath, buffer);

		return outputPath;
		console.log(`Certificate generated for ${name}!`);
	} catch (error) {
		console.error("Error generating certificate:", error);
	}
}
