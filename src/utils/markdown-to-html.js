import Showdown from 'showdown'

const converter = new Showdown.Converter()

const markdownToHtml = markdownString => {
  return converter.makeHtml(markdownString)
}

export default markdownToHtml


