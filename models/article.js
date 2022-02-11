const mongoose = require('mongoose');
const {marked, parse} = require('marked');
const slugify = require('slugify');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
// create dom purifier
const dompurify = createDomPurify(new JSDOM().window)



const articleSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
},
    description: {
        type: String,
        
    },
    markdown: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        required: true,
        unique: true,

    },
    sanitizedHtml: {
        type: String,
        required: true,
    }

})
// ARTICLE SCHEMA PRE-VALIDATION
articleSchema.pre('validate', function(next) {
    // setting the slug to a slugify'd version of the title
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }
    // changing markdown text to html and using dompurify.sanitize to sanitize it
    if (this.markdown) {
        this.sanitizedHtml =  dompurify.sanitize(marked.parse(this.markdown))
    }
    next()
} )

module.exports = mongoose.model('Article', articleSchema)