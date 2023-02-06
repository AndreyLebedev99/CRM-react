const testData = [
	{ name: "Кирилл Вишнёв", phone: "898881112233", email: "kirillll@mail.ma", product: "course-js" },
	{ name: "Татьяна Весельчак", phone: "89876543219", email: "asraq@mail.fd", product: "course-html" },
	{ name: "Алена Львовна", phone: "89998887766", email: "alenka123@mail.ggf", product: "course-wordpress" },
	{ name: "Денис Денисович", phone: "89999999999", email: "dendenovich@gmail.org", product: "course-php" },
	{ name: "Пётр Первый", phone: "89123123123", email: "petrperviy@vk.lo", product: "course-php" },
	{ name: "Юля Курилина", phone: "89899899898", email: "mylittlepony@mail.nu", product: "course-vue" },
	{ name: "Михаил Дорн", phone: "894445553267", email: "pevec-hz-kto@tutu.tu", product: "course-vue" },
]

const getRandomInt = (max) => Math.floor(Math.random() * max)
const getRandomExample = () => testData[getRandomInt(testData.length)]

export { getRandomExample }