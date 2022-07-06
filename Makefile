#############################
# Application Teritory
#############################

NPM := npm

dev:
	${NPM} run dev

start:
	${NPM} start

build:
	${NPM} run build

install: npm.o build.o

npm.o:
	${NPM} ci

build.o:
	${NPM} run build

#############################
# Typeorm Database Teritory
#############################

orsrun:
ifdef type
	${NPM} run seed:${type}
endif

orscon:
	${NPM} run seed:config

ormake:
ifdef name
	${NPM} run orm:make ${name}
endif

ormig:
ifdef type
	${NPM} run orm:${type}
endif

orlist:
	${NPM} run orm:list