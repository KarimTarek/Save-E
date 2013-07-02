# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Device'
        db.create_table('EnergySaving_device', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
        ))
        db.send_create_signal('EnergySaving', ['Device'])

        # Adding model 'Badge'
        db.create_table('EnergySaving_badge', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('image', self.gf('django.db.models.fields.files.ImageField')(max_length=100)),
        ))
        db.send_create_signal('EnergySaving', ['Badge'])

        # Adding model 'User'
        db.create_table('EnergySaving_user', (
            ('user_ptr', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['auth.User'], unique=True, primary_key=True)),
            ('money', self.gf('django.db.models.fields.CharField')(default='200', max_length=100)),
            ('level', self.gf('django.db.models.fields.CharField')(default='1', max_length=100)),
        ))
        db.send_create_signal('EnergySaving', ['User'])

        # Adding M2M table for field badge on 'User'
        m2m_table_name = db.shorten_name('EnergySaving_user_badge')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('user', models.ForeignKey(orm['EnergySaving.user'], null=False)),
            ('badge', models.ForeignKey(orm['EnergySaving.badge'], null=False))
        ))
        db.create_unique(m2m_table_name, ['user_id', 'badge_id'])

        # Adding model 'Usage'
        db.create_table('EnergySaving_usage', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('value', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('device', self.gf('django.db.models.fields.related.ForeignKey')(related_name='UsageS Device', to=orm['EnergySaving.Device'])),
            ('date', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal('EnergySaving', ['Usage'])

        # Adding model 'Tips'
        db.create_table('EnergySaving_tips', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('tip', self.gf('django.db.models.fields.CharField')(max_length=1000)),
        ))
        db.send_create_signal('EnergySaving', ['Tips'])


    def backwards(self, orm):
        # Deleting model 'Device'
        db.delete_table('EnergySaving_device')

        # Deleting model 'Badge'
        db.delete_table('EnergySaving_badge')

        # Deleting model 'User'
        db.delete_table('EnergySaving_user')

        # Removing M2M table for field badge on 'User'
        db.delete_table(db.shorten_name('EnergySaving_user_badge'))

        # Deleting model 'Usage'
        db.delete_table('EnergySaving_usage')

        # Deleting model 'Tips'
        db.delete_table('EnergySaving_tips')


    models = {
        'EnergySaving.badge': {
            'Meta': {'object_name': 'Badge'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        'EnergySaving.device': {
            'Meta': {'object_name': 'Device'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'EnergySaving.tips': {
            'Meta': {'object_name': 'Tips'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'tip': ('django.db.models.fields.CharField', [], {'max_length': '1000'})
        },
        'EnergySaving.usage': {
            'Meta': {'object_name': 'Usage'},
            'date': ('django.db.models.fields.DateTimeField', [], {}),
            'device': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'UsageS Device'", 'to': "orm['EnergySaving.Device']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'value': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        'EnergySaving.user': {
            'Meta': {'object_name': 'User', '_ormbases': ['auth.User']},
            'badge': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['EnergySaving.Badge']", 'symmetrical': 'False'}),
            'level': ('django.db.models.fields.CharField', [], {'default': "'1'", 'max_length': '100'}),
            'money': ('django.db.models.fields.CharField', [], {'default': "'200'", 'max_length': '100'}),
            'user_ptr': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['auth.User']", 'unique': 'True', 'primary_key': 'True'})
        },
        'auth.group': {
            'Meta': {'object_name': 'Group'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        'auth.permission': {
            'Meta': {'ordering': "('content_type__app_label', 'content_type__model', 'codename')", 'unique_together': "(('content_type', 'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['contenttypes.ContentType']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Group']", 'symmetrical': 'False', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['EnergySaving']