package main

import (
	"fmt"
)

type Font interface {
	GetName() string
}
type DefaultFont struct{}

func (f *DefaultFont) GetName() string {
	return "Default"
}

type BoldFont struct{}

func (f *BoldFont) GetName() string {
	return "Bold"
}

type FontFactory struct {
	fonts map[string]Font
}

func NewFontFactory() *FontFactory {
	return &FontFactory{fonts: make(map[string]Font)}
}

func (f *FontFactory) GetFont(fontName string) Font {
	if font, ok := f.fonts[fontName]; ok {
		return font
	}
	switch fontName {
	case "Default":
		f.fonts[fontName] = &DefaultFont{}
	case "Bold":
		f.fonts[fontName] = &BoldFont{}
	default:
		panic("Font not supported: " + fontName)
	}
	return f.fonts[fontName]
}

type Text struct {
	content string
	font    Font
}

func NewText(content string, factory *FontFactory) *Text {
	return &Text{content: content, font: factory.GetFont("Default")} // Default font
}

func (t *Text) Render() string {
	return t.font.GetName() + ": " + t.content
}

func main() {
	factory := NewFontFactory()

	text1 := NewText("This is some text", factory)
	text2 := NewText("This is bold text", factory)
	text2.font = factory.GetFont("Bold") // Reuse existing font

	fmt.Println(text1.Render()) // Output: Default: This is some text
	fmt.Println(text2.Render()) // Output: Bold: This is bold text
}
