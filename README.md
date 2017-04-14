# Kodkod-Template-Site

Default Kodkod site with predefined Vagrantfile for easy start. This version of base site structure contains commonly used template for even faster development.

Documentation about additional elements and caracal extensions is [available here](docs/caracal.markdown).

### Preparation

The following steps will provide you with fully functional development environment for Caracal-based Kodkod template:

* [Create a new empty repository](https://github.com/repositories/new) on GitHub. This is where we will keep template-specific files, so name it accordingly. For the sake of tutorial we'll call it `New-Template`;
* Clone new repository to your local machine under `New-Template` name by issuing the following command:
```
git clone git@github.com:You/New-Template.git New-Template
```
* Go in to `New-Template` directory;
* We need to add [Kodkod-Template](https://github.com/Way2CU/Kodkod-Template) as `upstream` so Git knows where to pull things from. You do that with following command:
```
git remote add upstream https://github.com/Way2CU/Kodkod-Template.git
```
* We need to get `upstream` data. To do that issue the following command;
```
git pull upstream master
```
* Our new repository is ready, we can now push changes to GitHub:
```
git push origin --all
```

### Development environment

We use Vagrant to set up our environment. Once preparation is done you will have couple of files in your `New-Template` directory. These files should not be changed. While in `New-Template` directory issue the following command:
```
vagrant up
```
This should download, prepare and configure development environment for `New-Template`. This preparation can take a while depending on your network speed. You can now start working on your new template.

Suspending virtual environment is done with `vagrant suspend` and resumed with `vagrant resume`. Once development is completed virtual environment can be destroyed with `vagrant destroy` without affecting template files.
