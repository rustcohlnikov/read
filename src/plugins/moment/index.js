import moment from 'moment'
import 'moment/locale/ru'

moment.locale('ru')

const displayDate = (date) => moment(date).fromNow()

export {
	displayDate
}