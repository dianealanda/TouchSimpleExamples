/*
 * File: app/view/TweetList.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Tweets.view.TweetList', {
    extend: 'Ext.dataview.List',

    config: {
        emptyText: 'No tweets found matching that search.',
        store: 'TweetStore',
        disableSelection: true,
        itemTpl: [
            '<img src="{profile_image_url}" />',
            '<div class="tweet">',
            '<span class="posted">{created_at:timeAgoInWords}</span>',
            '<h2>{from_user}</h2>',
            '<p>{text}</p>',
            '</div>'
        ],
        plugins: [
            {
                type: 'listpaging'
            },
            {
                xtype: 'component',
                type: 'pullrefresh'
            }
        ]
    }

});