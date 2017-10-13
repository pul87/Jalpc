$(document).ready(function() {
  var i18nOpts = {
    lng: 'it',
    getAsync: true,
    fallbackLng: 'it',
    resGetPath: 'static/locales/__lng__.json'
  };

  var translate = function() {
    $('.i18container').i18n();
    $('#i18_navbar').i18n();
    $('#i18_about').i18n();
    $('#i18_history').i18n();
    $('#i18_universities').i18n();
    $('#i18_campaigns').i18n();
    $('#i18_blog').i18n();
    $('#i18_link').i18n();
    $('#i18_credits').i18n();
  };

  $("[id^=set_lang]").each(function() {
    var $this = $(this);
    $this.on('click', function() {
      i18n.setLng($this.data('locale'), translate);
    });
  });

  i18n.init(i18nOpts, translate);
});